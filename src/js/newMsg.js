import moment from 'moment';

export default function newMsg(parent, value) {
  console.log(value);
  if (value === 'error') return;
  const { messages } = value;
  messages.forEach((msg) => {
    const { id } = msg;
    const name = msg.from;
    const { subject } = msg;
    const text = msg.body.length >= 15 ? `${msg.body.slice(0, 16)}...` : msg.body;
    const timestamp = new Date(msg.received);
    const time = moment(timestamp).format('hh:mm DD.MM.YYYY');
    const elem = document.createElement('div');
    elem.setAttribute('class', 'msg');
    elem.setAttribute('id', id);
    elem.innerHTML = `<p>${name}</p><p>${subject}</p><p>${text}</p><p>${time}</p>`;
    parent.append(elem); // prepend
  });
}
