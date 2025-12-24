import { CURRENT_USER } from "@/config/constants";
import Avatar from "./Avatar";
import { LogoutIcon } from "../icons";

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex gap-3 items-center">
        <Avatar src={CURRENT_USER.avatar} alt={CURRENT_USER.name} />
        <div className="flex flex-col">
          <span className="text-sm font-semibold leading-5 text-gray-900">
            {CURRENT_USER.name}
          </span>
          <span className="text-sm font-normal leading-5 text-gray-600">
            {CURRENT_USER.email}
          </span>
        </div>
      </div>
      <button className="p-2" aria-label="Cerrar sesión">
        <LogoutIcon className="text-gray-500" />
      </button>
    </div>
  );
};

export default UserProfile;
