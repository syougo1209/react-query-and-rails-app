json.chat_room do
  json.id @chat_room.id
  json.title @chat_room.recruitment.title
  json.created_at @chat_room.created_at
  json.messages do
    json.array! @messages, :content, :user, :created_at
  end
end