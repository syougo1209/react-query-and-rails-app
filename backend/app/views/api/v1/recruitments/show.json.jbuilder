json.recruitment do
  json.id @recruitment.id
  json.title @recruitment.title
  json.content @recruitment.content
  json.status @recruitment.status
  json.created_at @recruitment.created_at
  json.recruitment_type @recruitment.recruitment_type
  json.user do
    json.name @recruitment.user.name
  end
end