json.array! @recruitments do |recruitment|
  json.id recruitment.id
  json.title recruitment.title
  json.user do
    json.name recruitment.user.name
  end
end