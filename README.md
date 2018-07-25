## Presentation Examples/Solutions

### Rest/GraphQL Queries for the following
* A list of the names of members in a particular group.
``` graphql
query {
  group(id: 3) {
    name,
    members {
      name
    }
  }
}
```

* A list of the names of all groups in the system that a user belongs to.
``` graphql
query {
  user(id: 8) {
    groups {
      name
    }
  }
}
```

* A list of groups in the system that a user belongs to, but instead of just the name of the group, return the names and emails of all the members in each group.
``` graphql
query {
  user(id: 8) {
    groups {
      name
      members {
        name,
        email
      }
    }
  }
}
```