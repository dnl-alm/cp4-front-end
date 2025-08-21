interface MotivationalMessageprops {
    message: string;
    author: string;
}

export function MotivationalMessage(props: MotivationalMessageprops) {
    return (
        <>
            <div style={{
                border: "0.3rem solid #000000",
                borderRadius: '0.5rem',
                textAlign: "center"
            }}>
                <h2>{props.message}</h2>
                <p>{props.author}</p>
            </div>
        </>
    );
}