const sidebarIsOpen = ref(false);
const sidebarEnabled = ref(false);

export default () => {
  const toggleSidebar = async () => {
    sidebarIsOpen.value = !sidebarIsOpen.value;
  };
  return {
    toggleSidebar,
    sidebarIsOpen,
    sidebarEnabled,
  };
};
