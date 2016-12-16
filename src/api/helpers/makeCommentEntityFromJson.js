export default json => ({
  ...json,
  id: json._id,
  user: json.user_id,
  createdAt: json.created_at
})
