import { useState } from "react";

const useDropdown = () => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);

    const toggleDropdown = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setIsOpenDropDown((prev) => !prev);
    };

    return { isOpenDropDown, toggleDropdown };
};

export default useDropdown;