import { connect } from "react-redux"
import PostsUI from "../ui/Posts"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsUI)

Posts.displayName = "Containers/Posts"

export default Posts
