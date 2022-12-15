class UserService {
  edit(id) {
    console.log('edit', id);
  }

  ban(id) {
    console.log('ban',id);
  }

  unban(id) {
    console.log('unban', id);
  }
}

export default new UserService();
