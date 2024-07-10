import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import { useMyContext } from "../../../MyContextProvider";
import RecipesPage from "../recipes/Recipes";
import RecipeDetails from "../details/RecipeDetails";

function Body() {
  const { token } = useMyContext();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to={"/"} replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {token && (
          <>
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/details" element={<RecipeDetails />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default Body;
