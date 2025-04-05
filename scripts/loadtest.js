import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '15s',
};

export default function () {
  const hosts = ['foo.localhost', 'bar.localhost'];
  const target = hosts[Math.floor(Math.random() * hosts.length)];
  let res = http.get('http://' + target, {
    headers: { Host: target },
  });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
