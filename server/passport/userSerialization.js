import logger from '../logger';

export function serializer(user, done) {
  done(null, user.id);
}

export function deserializer(id, done) {
  done(null, { username: 'devin', id });
}
