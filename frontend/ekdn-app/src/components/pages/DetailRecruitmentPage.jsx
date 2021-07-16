import React, {useState} from 'react';
import {useMutation} from 'react-query'

import DetailRecruitment from 'containers/organisms/DetailRecruitment';
import BottomMenu from 'components/molecules/BottomMenu'
import CreateRecruitmentChatModal from 'components/organisms/CreateRecruitmentChatModal'

import {Button, Popup} from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

import axios from 'apis/settings/axios';

const useStyles = createUseStyles({
  BottomMenuComponent: {
    marginLeft: '20px !important',
  }
})

const DetailRecruitmentPage=({recruitment, userId})=>{
  const [modalIsOpen, setModalIsOpen]=useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isPosting, setIsPosting] = useState(false)
  const [canCreate, setCanCreate] = useState(false)

  const ConfirmRequestMutate = useMutation((recruitmentId) =>axios.post(`recruitments/${recruitmentId}/recruitment_chat_starts/confirm`), {
    onMutate: ()=>{
      setIsPosting(true)
    },
    onError: (error)=>{
      setModalIsOpen(true)
      setModalMessage(error.response.data.message)
      setCanCreate(false)
    },
    onSuccess: (data)=>{
      console.log(data)
      setModalIsOpen(true)
      setModalMessage("この募集の作成者のグチを聞きますか?")
      setCanCreate(true)
    },
    onSettled: ()=>{
      setIsPosting(false)
    }
  })
  const confirmRequest=()=>{
    ConfirmRequestMutate.mutate(recruitment.id)
  }

  const classes = useStyles();

  return (
    <>
      <DetailRecruitment recruitmentId={recruitment.id}/>

      <CreateRecruitmentChatModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalMessage={modalMessage}
        setModalMessage={setModalMessage}
        canCreate={canCreate}
        setCanCreate={setCanCreate}
        recruitment={recruitment}
      />
     {userId &&
        <BottomMenu>
          <Popup
            content='このグチを聞く'
            trigger={
              <Button
                circular
                color='facebook'
                icon='chat'
                className={classes.BottomMenuComponent}
                onClick={confirmRequest}
                disabled={isPosting}
              />
            }
          />
        </BottomMenu>
     }
    </>
  )
  }
  
  export default DetailRecruitmentPage