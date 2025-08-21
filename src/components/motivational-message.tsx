interface MotivationalMessageprops {
    message: string;
    author: string;
}

export function MotivationalMessage(props: MotivationalMessageprops) {
    return (
        <>
            <div>
                <h2>{props.message}</h2>
                <p>{props.author}</p>
            </div>
        </>
    );
}