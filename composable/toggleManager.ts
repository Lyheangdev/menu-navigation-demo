
export function useToggleManager() {
    const isOpen = ref(false);

    function handleOpen() {
        if (isOpen.value) return;
        isOpen.value = true;
    }

    function handleClose() {
        if (!isOpen.value) return;
        isOpen.value = false;
    }

    function handleToggle() {
        isOpen.value = !isOpen.value;
    }

    return { isOpen, handleClose, handleOpen, handleToggle }
}