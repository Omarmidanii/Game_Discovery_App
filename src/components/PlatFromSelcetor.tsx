import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForm from "../hooks/usePlatForms";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  SelectedPlatform: Platform | null;
}
export const PlatFromSelcetor = ({
  onSelectPlatform,
  SelectedPlatform,
}: Props) => {
  const { data, err, isLoading } = usePlatForm();
  if (err) return null;
  const Platform = SelectedPlatform ? SelectedPlatform.name : "PlatForms";
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {Platform}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => {
                onSelectPlatform(platform);
              }}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
