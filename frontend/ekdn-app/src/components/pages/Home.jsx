import React, { Suspense, useState } from 'react';
import Categories from 'containers/organisms/Categories';
import Users from 'containers/organisms/Users';
import { Button, Input } from 'semantic-ui-react';
import axios from 'domains/settings/axios'

const Home=(haveRecommendedCategoryIds, recommendedCategoryIds=[])=>{
  const useInput = initialValue => {
    const [value, set] = useState(initialValue)
    return { value, onChange: (e) => set(e.target.value) }
  };
  const name = useInput("");
  const password = useInput("");
  const email = useInput("");

  const handleSubmit = async (event) => {
     event.preventDefault();
     const response = await axios.post('/users', {
       user: {
         name: name.value,
         password: password.value,
         email: email.value
       }
     })
     console.log(response.status)
  };

  return (
    <>
    <h1>Home</h1>
    {
      <>
      <Suspense fallback={<div>hello</div>}>
        <Categories categoryIds={recommendedCategoryIds}/>
      </Suspense>
      <Suspense fallback={<div>hello</div>}>
        <Users categoryIds={recommendedCategoryIds}/>
      </Suspense>
      </>
    }
    <h1>user create</h1>
    <form className="search-form" onSubmit={handleSubmit}>
      <Input
      placeholder="ユーザーの名前を入力..." type="text"
      {...name}
      />
      <Input
      placeholder="ユーザーのメールアドレスを入力..." type="text"
      {...password}
      />
      <Input
      placeholder="ユーザーのメールアドレスを入力..." type="text"
      {...email}
      />
      <Button type="submit" primary>検索 </Button>
    </form>
    </>
  )
}

export default Home