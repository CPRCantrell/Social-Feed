import "./CreatePostForm.css"

const CreatePostForm = (props) => {

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Thoughts</label>
                <textarea />
            </div>
            <button type="submit">Post</button>
        </form>
    );
}

export default CreatePostForm;