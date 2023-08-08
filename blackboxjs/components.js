export function Mount(component, whereto) {
    whereto.appendChild(component())
    if (component().OnCreate !== undefined) {
        component().OnCreate
    }
}