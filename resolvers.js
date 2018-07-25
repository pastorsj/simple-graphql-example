import getAllUsers from './services/user-service';
import getAllGroups from './services/group-service';

const resolvers = {
  Query: {
    users(root, args) {
      return getAllUsers();
    },
    user(root, args) {
      return getAllUsers().then(users => users.find(o => args.id === o.id));
    },
    groups(root, args) {
      return getAllGroups();
    },
    group(root, args) {
      return getAllGroups().then(groups => groups.find(g => args.id === g.id));
    }
  }
};

export default resolvers;
