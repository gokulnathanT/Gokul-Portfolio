import logo from "../assets/g.png";
import { FaEnvelope,FaLinkedin,FaHackerrank, FaGithub, FaInstagram } from "react-icons/fa";
// import leetcodelogo from "../components/LeetCodeIcon";
import leetcode from "../assets/Leetcode.png";

const NavBar = () => {
  return (
    <nav className=" mb-20 overflow-hidden flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/gokulnathan-thanapal-815586259/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/gokulnathanT" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:mailtogokul1727@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope/></a>
            <a href="https://www.instagram.com/_gokul_._._/" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
            <a href="https://www.hackerrank.com/profile/mailtogokul1727" target="_blank" rel="noopener noreferrer"><FaHackerrank/></a>
            <a href="https://leetcode.com/u/Gokulnathan_Thanapal/" target="_blank" rel="noopener noreferrer"> <img src={leetcode} alt="leetcode" className="w-6 h-6" /></a>
        </div> 
    </nav>
  );
}

export default NavBar;
