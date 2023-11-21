

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='mx-auto space-y-5 mb-5 md:w-3/12 text-center'>
            <p className='text-xl text-[#D99904] '>{subheading}</p>

            <h3 className='text-3xl border-y-4 p-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;