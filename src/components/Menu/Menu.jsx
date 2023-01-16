import "./Menu.css";
function Menu() {
  return (
    <nav class="sidenav">
      <ul class="main-buttons">
              <li style={{fontfamily:"Poppins"; color: "#fff"; font-size: "32px"; cursor: "context-menu";}}>
          morteam<span style="color:#FF5F00">.</span>
        </li>
        <li>Start</li>
        <li>
          <a
            href="Team1515.com"
            target="_blank"
            style="color: white; text-decoration: none;"
          >
            Team site{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
