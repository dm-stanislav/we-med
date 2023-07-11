// eslint-disable-next-line
window.manageForms = (props) => {
    if (['schedule_modal_form', 'partnership_modal_form'].includes(props.formElement.id)) {
        if (props.ok) {
            // Вибати тост елемент
            const exampleToast = document.getElementById('example_toast')
            // Створити інстанс
            // eslint-disable-next-line no-undef
            const toastInstance = Toast.getOrCreateInstance(exampleToast)

            // Показати тост
            toastInstance.show()

            // Прибрати через 5 секунд
            setTimeout(() => {
                toastInstance.hide()
            }, 5000)

            // Скинути поля форми
            props.formElement.reset()
            // Зупинити валідацію (оскільки поля порожні, щоб не показувало помилки)
            props.stopValidation()

            // Закрити модалку
            const closestModal = props.formElement.closest('.modal')

            if (closestModal) {
                // eslint-disable-next-line no-undef
                const modalInstance = Modal.getOrCreateInstance(closestModal)
                modalInstance.hide()
            }
        }
    }

    return false
    // return props.ok
}

// Прибрати функцію з об'єкту window (необов'язково)
// setTimeout(() => {
//     window.manageForms = null
// }, 3000)
