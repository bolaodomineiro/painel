const useScroll = () => {

    const hendleScroll = (number) => {
        window.scrollTo({
            top: number, // posição vertical
            left: 0, // posição horizontal
            behavior: 'smooth' // rolagem suave
        });
    }

    return {hendleScroll};
};

export default useScroll;

