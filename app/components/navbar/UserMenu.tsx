"use client"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useState } from "react"
import MenuItem from "./MenuItem"

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <div className="flex flex-col cursor-pointer">
        <div className="bg-slate-50">
          <MenuItem onClick={registerModal.onOpen} label="Sign up" />
        </div>
      </div>
    </div>
  )
}

export default UserMenu
