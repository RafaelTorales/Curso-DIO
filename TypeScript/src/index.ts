// Decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {}
@ExibirNome
class Quincas {}

// Class decorator
function apiVersion(version: string) {
    return (targett: any) => {
        Object.assign(targett.prototype, { __version: version });
    };
}

// Attribute decorator

function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < lenght) {
                throw new Error(`Tamanho menor do que ${lenght}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLenght(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("produtros");
console.log(api.name);
