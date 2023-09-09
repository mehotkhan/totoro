const sidebarIsOpen = ref(true);
const sidebarEnabled = ref(false);

export default () => {
  onMounted(() => {
    sidebarIsOpen.value = true;
  });
  const toggleSidebar = async () => {
    sidebarIsOpen.value = !sidebarIsOpen.value;
  };
  onUnmounted(() => {
    sidebarIsOpen.value = false;
  });
  return {
    toggleSidebar,
    sidebarIsOpen,
    sidebarEnabled,
  };
};
