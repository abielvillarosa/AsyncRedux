import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Posts extends Component {

  render() {

    return (
    <div>
        {this.props.posts.map((post) => (
            <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
            <ListItemText primary={post.title} />
            </ListItem>
            </List>
        ))}
    </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}