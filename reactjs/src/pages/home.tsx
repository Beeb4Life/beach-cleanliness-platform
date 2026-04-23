import HeroSection from "../sections/hero-section";
import BeachStatusDashboard from "../sections/beach-status";
import GarbageReportingForm from "../sections/garbage-reporting";
import CleanupDrives from "../sections/cleanup-drives";
import AwarenessSection from "../sections/awareness";

const Home = () => {
    return (
        <>
            <HeroSection />
            <BeachStatusDashboard />
            <GarbageReportingForm />
            <CleanupDrives />
            <AwarenessSection />
        </>
    );
};

export default Home;