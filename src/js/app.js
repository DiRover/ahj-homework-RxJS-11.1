import { from, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { switchMap } from 'rxjs/operators';
import newMsg from './newMsg';

const msgBox = document.querySelector('.msg-box');

const url = 'http://localhost:7070/messages/unread';
const request = ajax.getJSON(url);

interval(1000)
  .pipe(switchMap(() => request))
  .subscribe({
    next: (value) => {
      console.log(value);
      newMsg(msgBox, value);
    },
    error: () => { console.log('empty message'); },
  });

// const interval$ = interval(1000);
// const source = interval$.pipe(request.subscribe((v) => console.log(v)));
// source.subscribe((v) => console.log(v))

/* const messages$ = request.subscribe(
    {
        next: (value) => {console.log(value)},
        error: (err) => {},
        complete: () => {}
    }
); */

const apiPromise = fetch(url);
from(apiPromise).subscribe((result) => console.log(result.json()));
