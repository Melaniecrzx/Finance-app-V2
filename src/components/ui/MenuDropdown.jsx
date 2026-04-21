import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function MenuDropdown({ button, links }) {
  return (
    <Menu>
      <MenuButton>{button}</MenuButton>
      <MenuItems anchor="bottom" className="bg-white rounded-xl">
        {links.map((link) => (
          <MenuItem
            key={link.id}
            as="button"
            onClick={link.onClick}
            className={`block w-full text-left hover:bg-blue-100 border-b border-grey-100 py-3 px-5 last:border-none cursor-pointer ${link.className}`}
          >
            {link.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
