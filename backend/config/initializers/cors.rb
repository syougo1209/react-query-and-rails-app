Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # localhost:3000 からのアクセスを許容する
    origins ['http://localhost:3001']

    resource '*',
    headers: :any,
    methods: %i[get post put patch delete options head]
  end
end