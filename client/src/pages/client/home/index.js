import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div><h1>PAINEL</h1></div>
            <div>
                <Button variant="contained"><Link to="/produtos" style={{
                    textDecoration: "none"
                }}>Cliente</Link></Button>
                <Button variant="outlined"><Link to="/admin/login" style={{
                    textDecoration: "none"
                }}>Administrador</Link></Button>
            </div>
        </div>
    );
}

export default Home;