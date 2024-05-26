export default function Button({ children, type, handler }) {
    const css = type === 'suncess' ?
        'bg-fuchsia-700 p-2 px-3 rounded-md text-lime-300' :
        'bg-rose-950 p-2 px-3 rounded-md text-lime-100';
    return (
        <button
            className={css}
            onClick={handler}
        >
            {children}
        </button>
    )
}