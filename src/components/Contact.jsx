import { Button, TextField } from "@mui/material"

export default function Contact() {
    const style = {
        input: {
            color: 'white'
        },
        textArea: {
            color: 'white'
        },
        fieldset: {
            borderColor: 'white'
        },
        ".MuiInputBase-root:hover fieldset": {
            borderColor: '#1976d2'
        },
        label: {
            color: 'lightgrey'
        }
    }
      
      
    return (
        <section className="contact-container">
            <form action="" className="contact-form">
                <TextField 
                    sx={style} 
                    label="Name" 
                    variant="outlined"
                    size="small"
                />
                <TextField 
                    sx={style} 
                    label="Email" 
                    variant="outlined"
                    size="small"
                />
                <TextField 
                    multiline 
                    minRows={3}
                    maxRows={3}
                    sx={style} 
                    label="Message" 
                    variant="outlined"
                    size="small"
                />
                <Button size="small" className="btn" variant="contained">
                    Send
                </Button>
            </form>
        </section>
    )
}