import React from 'react'
import UserCabinetEdit from '../components/user-cabinet/UserCabinetEdit'
import UserCabinetControl from '../components/user-cabinet/UserCabinetControl'

export default function UserCabinet() {
  return (
    <div>
      <UserCabinetControl />
      <UserCabinetEdit />
    </div>
  )
}
