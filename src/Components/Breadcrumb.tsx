import { Link, useLocation } from "react-router-dom"

const Breadcrumb = () =>{
    const {pathname} = useLocation();
    console.log(pathname);
    const pathnames = pathname.split("/").filter(x => x.trim()!== '');
    console.log(pathnames);
    let breadCrumbPath = "";
    return (
        <>
            {pathnames.length > 0 && <Link to="/">Home</Link>}
            {
                pathnames.map((path, index) => {
                    breadCrumbPath+=`/${path}`;

                    const isLast = index === pathnames.length -1;
                    return isLast ? (<span key={breadCrumbPath}>/ {path}</span>) : (<span key={breadCrumbPath}> / <Link to={breadCrumbPath}>{path}</Link> </span>);
                })
            }
        </>
    )
}

export default Breadcrumb;