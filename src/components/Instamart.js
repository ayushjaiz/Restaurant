import { useState } from "react";

const Section = ({ name, message, isVisible, config }) => {

    return (
        <div className="border border-black m-2 p-2">
            <h1 className="font-bold text-2xl">Section: {name}</h1>

            {(isVisible) ? (
                <>
                    <button
                        className="m-1 border border-black"
                        onClick={() => config(false)}
                    >
                        Hide
                    </button>
                    <div>{message}</div>
                </>
            ) : (
                <button
                    className="m-1 border border-black"
                    onClick={() => config(true)}
                >
                    Show
                </button>
            )
            }
        </div >
    )
}

const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState("contact");
    return (
        <>
            <h1>Subcomapny of swiggy</h1>
            <div>Instamart</div>
            <Section
                name={"About"}
                message={"Lorem ipsum dolor sit amet. Ab odit voluptas aut internos maiores ut ipsa autem ut dignissimos quisquam. Qui tempora molestias ut laboriosam fugit est rerum galisum. Sit placeat impedit sit beatae debitis ut minus nobis aut fuga maiores est dolores quasi."}
                isVisible={sectionConfig === "about"}
                config={(toggle) => toggle ? setSectionConfig("about") : setSectionConfig("")} />

            <Section
                name={"Contact"}
                message={"Lorem ipsum dolor sit amet. Ab odit voluptas aut internos maiores ut ipsa autem ut dignissimos quisquam. Qui tempora molestias ut laboriosam fugit est rerum galisum. Sit placeat impedit sit beatae debitis ut minus nobis aut fuga maiores est dolores quasi."}
                isVisible={sectionConfig === "contact"}
                config={(toggle) => toggle ? setSectionConfig("contact") : setSectionConfig("")} />

            <Section
                name={"Profile"}
                message={"Lorem ipsum dolor sit amet. Ab odit voluptas aut internos maiores ut ipsa autem ut dignissimos quisquam. Qui tempora molestias ut laboriosam fugit est rerum galisum. Sit placeat impedit sit beatae debitis ut minus nobis aut fuga maiores est dolores quasi."}
                isVisible={sectionConfig === "profile"}
                config={(toggle) => toggle ? setSectionConfig("profile") : setSectionConfig("")} />
        </>
    )
}

export default Instamart