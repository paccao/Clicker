export function show(selector){
    const selectedElement=document.querySelector(selector)
    selectedElement.style.display = ""
}

export function hide(selector){
    const selectedElement=document.querySelector(selector)
    selectedElement.style.display = "none"
}

