

export default function Divider({ orientation = 'horizontal', thickness = '1px', color = 'var(--neutral-300)' }) {
    const style = {
        border: 'none',
        backgroundColor: color
    }

    if (orientation === 'horizontal') {
        style.width = '100%';
        style.height = thickness;
    } else {
        style.width = thickness;
        style.height = '100%';
        style.display = 'inline-block';
    }
    
    return (
        <hr style={style} />
    )
}