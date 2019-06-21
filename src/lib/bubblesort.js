




export default class BubbleSort {
    constructor() {

    }

    start = (valueText, modo) => {
        let newValue = valueText.replace(" ", "") //remove os espaços 
        let list_ = newValue.split(',')           // Criar uma Array usando o separador ","

        for (let i = 0; i < list_.length; i++) {
            let x = parseInt(list_[i])
            if (Number.isNaN(x)) {
                return undefined
            } else {
                list_[i] = x
            }
        }
            
        return this._getBubbleSort(list_, modo) //.join(',')

    }
    _getBubbleSort = (list_, modo) => {
        //Faz a ordenação de um lista crescente.
        copy_list = list_
        let x, y, v;
        for (x = 0; x < list_.length; x++) {
            for (y = x + 1; y < list_.length; y++) {

                if (modo === "C") {
                    if (copy_list[y] < copy_list[x]) {
                        v = copy_list[y]
                        copy_list[y] = copy_list[x]
                        copy_list[x] = v
                    }
                } else {
                    if (copy_list[y] > copy_list[x]) {
                        v = copy_list[y]
                        copy_list[y] = copy_list[x]
                        copy_list[x] = v
                    }
                }

            }
        }
        return copy_list
    }


}