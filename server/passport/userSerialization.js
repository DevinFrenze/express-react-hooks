export function serializer(user, done) {
  // TODO update
  done(null, user);
}

export function deserializer(id, done) {
  // TODO replace this with our own ORGM stuff

  done(null, { username: 'devin' });
  /*
  User.findById(id, function(err, user) {
    done(err, user);
  });
  */
}
