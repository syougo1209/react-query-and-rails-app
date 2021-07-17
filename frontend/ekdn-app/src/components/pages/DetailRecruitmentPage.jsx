import React, {useState} from 'react';
import {useMutation} from 'react-query'

import DetailRecruitment from 'containers/organisms/DetailRecruitment';
import BottomMenu from 'components/molecules/BottomMenu'
import CreateRecruitmentChatModal from 'components/organisms/CreateRecruitmentChatModal'

import {Button, Popup} from 'semantic-ui-react'
import {createUseStyles} from 'react-jss'

import axios from 'apis/settings/axios';

import { CREATE_CHAT_MODAL_STATUS } from 'constants/modalStatus'

const useStyles = createUseStyles({
  BottomMenuComponent: {
    marginLeft: '20px !important',
  }
})


const DetailRecruitmentPage=({recruitment, userId})=>{
  const [modalStatus, setModalStatus]=useState(CREATE_CHAT_MODAL_STATUS.notDisplay)
  const [isPosting, setIsPosting] = useState(false)

  const ConfirmRequestMutate = useMutation((recruitmentId) =>axios.post(`recruitments/${recruitmentId}/recruitment_chat_starts/confirm`), {
    onMutate: ()=>{
      setIsPosting(true)
    },
    onError: ()=>{
      setModalStatus(CREATE_CHAT_MODAL_STATUS.confirmModalError)
    },
    onSuccess: ()=>{
      setModalStatus(CREATE_CHAT_MODAL_STATUS.displayConfirmModal)
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
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
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