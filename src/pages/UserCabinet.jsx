import React from 'react'
import UserProfileEdit from '../components/user-profile/UserProfileEdit'
import EditUserProfileControl from '../components/user-profile/EditUserProfileControl'

export default function UserCabinet() {
  return (
    <div>
      <EditUserProfileControl />
      <UserProfileEdit />
    </div>
  )
}
