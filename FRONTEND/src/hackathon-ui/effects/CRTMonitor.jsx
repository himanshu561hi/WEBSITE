import React, { memo } from "react";
import SignalMonitor from "../components/SignalMonitor";

/**
 * CRTMonitor
 * Surveillance terminal displaying live unknown signal analysis.
 */
const CRTMonitor = memo(function CRTMonitor({ className = "" }) {
  return <SignalMonitor className={className} />;
});

export default CRTMonitor;
