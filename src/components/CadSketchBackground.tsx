import React from 'react';

interface CadSketchBackgroundProps {
  className?: string;
  opacity?: number;
}

export const CadSketchBackground: React.FC<CadSketchBackgroundProps> = ({
  className = '',
  opacity = 0.22
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`} 
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full object-cover min-w-[900px]"
        viewBox="0 0 1400 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle millimeter drafting grid */}
          <pattern id="cadGridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
          <pattern id="cadGridMajor" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#cadGridSmall)" />
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0F172A" strokeWidth="1" strokeOpacity="0.7" />
            <circle cx="0" cy="0" r="1.5" fill="#0284C7" />
          </pattern>
          
          {/* Concrete column diagonal hatch */}
          <pattern id="cadHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.6" />
          </pattern>

          {/* Dimension tick markers */}
          <marker id="cadTick" markerWidth="6" markerHeight="6" refX="3" refY="3">
            <line x1="0" y1="6" x2="6" y2="0" stroke="#0F172A" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* 1. CAD Technical Coordinate Grid */}
        <rect width="100%" height="100%" fill="url(#cadGridMajor)" />

        {/* 2. Architectural Floor Plan Drawings (Autodesk AutoCAD style) */}
        <g stroke="#0F172A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Building Outer Boundaries / Alinhamento Predial */}
          <rect x="520" y="60" width="820" height="660" stroke="#0369A1" strokeWidth="2.5" strokeDasharray="12 6" />
          <text x="530" y="50" fill="#0284C7" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ◄— ALINHAMENTO PREDIAL &amp; RECUO OBRIGATÓRIO (5.00m) —►
          </text>
          
          {/* Main Walls (Double Lines for Masonry Walls 15cm) */}
          {/* Outer perimeter */}
          <rect x="580" y="100" width="720" height="580" stroke="#0F172A" strokeWidth="3" />
          <rect x="595" y="115" width="690" height="550" stroke="#0F172A" strokeWidth="1.5" />

          {/* Room Dividers */}
          {/* Vertical wall splitting left & right wings */}
          <line x1="880" y1="115" x2="880" y2="665" stroke="#0F172A" strokeWidth="2" />
          <line x1="895" y1="115" x2="895" y2="665" stroke="#0F172A" strokeWidth="2" />

          {/* Horizontal wall for Suite & Bedroom */}
          <line x1="895" y1="360" x2="1285" y2="360" stroke="#0F172A" strokeWidth="2" />
          <line x1="895" y1="375" x2="1285" y2="375" stroke="#0F172A" strokeWidth="2" />

          {/* Horizontal wall for Kitchen & Living */}
          <line x1="595" y1="420" x2="880" y2="420" stroke="#0F172A" strokeWidth="2" />
          <line x1="595" y1="435" x2="880" y2="435" stroke="#0F172A" strokeWidth="2" />

          {/* Bathroom enclosure */}
          <rect x="1100" y="375" width="185" height="150" stroke="#0F172A" strokeWidth="2" />

          {/* Structural Reinforced Concrete Columns (P1, P2, P3...) with Diagonal Hatch */}
          <rect x="575" y="95" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="560" y="90" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P1 (20x20)</text>

          <rect x="875" y="95" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="875" y="90" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P2 (20x20)</text>

          <rect x="1280" y="95" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="1280" y="90" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P3 (20x20)</text>

          <rect x="575" y="660" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="560" y="700" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P4 (20x20)</text>

          <rect x="875" y="660" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="875" y="700" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P5 (20x20)</text>

          <rect x="1280" y="660" width="25" height="25" fill="url(#cadHatch)" stroke="#0F172A" strokeWidth="2" />
          <text x="1280" y="700" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">P6 (20x20)</text>

          {/* Door Openings with 90-degree Circular Swing Arcs */}
          {/* Main Entrance Door */}
          <line x1="620" y1="665" x2="670" y2="665" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="620" y1="665" x2="620" y2="615" stroke="#0F172A" strokeWidth="2" />
          <path d="M 620 615 A 50 50 0 0 1 670 665" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="630" y="640" fill="#0369A1" fontSize="9" fontFamily="monospace">P01 (0.80x2.10)</text>

          {/* Bedroom Door */}
          <line x1="895" y1="200" x2="895" y2="250" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="895" y1="200" x2="945" y2="200" stroke="#0F172A" strokeWidth="2" />
          <path d="M 945 200 A 50 50 0 0 1 895 250" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Suite Door */}
          <line x1="895" y1="460" x2="895" y2="510" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="895" y1="460" x2="945" y2="460" stroke="#0F172A" strokeWidth="2" />
          <path d="M 945 460 A 50 50 0 0 1 895 510" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Windows with triple parallel lines & sill */}
          {/* Window Living */}
          <line x1="640" y1="100" x2="780" y2="100" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="640" y1="100" x2="780" y2="100" stroke="#0F172A" strokeWidth="1" />
          <line x1="640" y1="108" x2="780" y2="108" stroke="#0284C7" strokeWidth="1.5" />
          <line x1="640" y1="115" x2="780" y2="115" stroke="#0F172A" strokeWidth="1" />
          <text x="670" y="88" fill="#0369A1" fontSize="9" fontFamily="monospace">J01 (1.40x1.20 / p=1.00)</text>

          {/* Window Suite */}
          <line x1="1000" y1="100" x2="1180" y2="100" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="1000" y1="108" x2="1180" y2="108" stroke="#0284C7" strokeWidth="1.5" />
          <text x="1050" y="88" fill="#0369A1" fontSize="9" fontFamily="monospace">J02 (1.80x1.20)</text>

          {/* Staircase Steps with Direction Arrow */}
          <g transform="translate(620, 150)">
            <rect x="0" y="0" width="100" height="180" stroke="#0F172A" strokeWidth="1.5" />
            <line x1="0" y1="20" x2="100" y2="20" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="60" x2="100" y2="60" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="120" x2="100" y2="120" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="140" x2="100" y2="140" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="160" x2="100" y2="160" stroke="#0F172A" strokeWidth="1" />
            {/* Arrow line */}
            <line x1="50" y1="170" x2="50" y2="30" stroke="#0284C7" strokeWidth="1.5" markerEnd="url(#cadTick)" />
            <circle cx="50" cy="170" r="3" fill="#0284C7" />
            <text x="58" y="100" fill="#0369A1" fontSize="9" fontFamily="monospace" transform="rotate(-90 58 100)">
              SOBE 16 DEG. (e=17.5 / p=28)
            </text>
          </g>

          {/* Dimension Chains / Cotas Arquitetônicas (NBR 6492) */}
          {/* Top Dimension */}
          <line x1="580" y1="30" x2="1300" y2="30" stroke="#0F172A" strokeWidth="1" />
          <line x1="580" y1="22" x2="580" y2="38" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="880" y1="22" x2="880" y2="38" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="1300" y1="22" x2="1300" y2="38" stroke="#0F172A" strokeWidth="1.5" />
          <text x="700" y="24" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold">3.00</text>
          <text x="1060" y="24" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold">4.20</text>

          {/* Left Vertical Dimension */}
          <line x1="540" y1="100" x2="540" y2="680" stroke="#0F172A" strokeWidth="1" />
          <line x1="532" y1="100" x2="548" y2="100" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="532" y1="420" x2="548" y2="420" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="532" y1="680" x2="548" y2="680" stroke="#0F172A" strokeWidth="1.5" />
          <text x="510" y="270" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 510 270)">
            3.20
          </text>
          <text x="510" y="560" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 510 560)">
            2.60
          </text>

          {/* Section Cutting Plane Line / Linha de Corte A-A */}
          <g stroke="#BE123C" strokeWidth="2">
            <line x1="500" y1="290" x2="1340" y2="290" strokeDasharray="16 4 4 4" />
            <path d="M 500 290 L 500 270 M 500 270 L 515 270" fill="none" strokeWidth="2.5" />
            <polygon points="500,265 510,260 510,270" fill="#BE123C" />
            <text x="520" y="280" fill="#BE123C" fontSize="12" fontFamily="monospace" fontWeight="bold">CORTE A-A</text>

            <path d="M 1340 290 L 1340 270 M 1340 270 L 1325 270" fill="none" strokeWidth="2.5" />
            <polygon points="1340,265 1330,260 1330,270" fill="#BE123C" />
            <text x="1270" y="280" fill="#BE123C" fontSize="12" fontFamily="monospace" fontWeight="bold">A</text>
          </g>

          {/* Room Labels / Tags Técnicas */}
          <g fill="#0F172A" fontFamily="monospace">
            {/* Living room */}
            <text x="660" y="520" fontSize="12" fontWeight="bold" letterSpacing="1">
              SALA DE ESTAR &amp; JANTAR
            </text>
            <text x="660" y="538" fontSize="10" fill="#475569">
              ÁREA: 24.80 m² • PÉ-DIREITO: 2.70m
            </text>
            <text x="660" y="554" fontSize="10" fill="#0369A1" fontWeight="bold">
              NÍVEL ACABADO: N.A. +0.15
            </text>

            {/* Kitchen */}
            <text x="630" y="380" fontSize="11" fontWeight="bold" letterSpacing="1">
              COZINHA / SERVIÇO
            </text>
            <text x="630" y="396" fontSize="9" fill="#475569">
              ÁREA: 10.40 m² • REVEST. CERÂMICO
            </text>

            {/* Bedroom 1 */}
            <text x="960" y="220" fontSize="11" fontWeight="bold" letterSpacing="1">
              DORMITÓRIO 01
            </text>
            <text x="960" y="236" fontSize="9" fill="#475569">
              ÁREA: 13.50 m² • PISO VINÍLICO
            </text>
            <text x="960" y="250" fontSize="9" fill="#0369A1">
              N.A. +0.15
            </text>

            {/* Master Suite */}
            <text x="960" y="580" fontSize="11" fontWeight="bold" letterSpacing="1">
              SUÍTE MASTER
            </text>
            <text x="960" y="596" fontSize="9" fill="#475569">
              ÁREA: 16.20 m² • VENTILAÇÃO DIRETA
            </text>
            <text x="960" y="610" fontSize="9" fill="#0369A1">
              N.A. +0.15
            </text>

            {/* Bathroom */}
            <text x="1130" y="440" fontSize="10" fontWeight="bold">
              BANHO SUÍTE
            </text>
            <text x="1130" y="454" fontSize="8" fill="#475569">
              4.20 m²
            </text>
          </g>

          {/* North Arrow / Indicador de Norte Magnético */}
          <g transform="translate(1310, 160)">
            <circle cx="0" cy="0" r="24" stroke="#0F172A" strokeWidth="1.5" />
            <polygon points="0,-22 7,0 0,-4" fill="#0F172A" />
            <polygon points="0,-22 -7,0 0,-4" fill="#64748B" />
            <line x1="0" y1="-24" x2="0" y2="24" stroke="#0F172A" strokeWidth="1" />
            <line x1="-24" y1="0" x2="24" y2="0" stroke="#0F172A" strokeWidth="1" />
            <text x="-4" y="-28" fill="#0F172A" fontSize="12" fontFamily="monospace" fontWeight="bold">N</text>
          </g>

          {/* CAD Title Block / Selo Técnico de Prancha no Canto */}
          <g transform="translate(940, 680)">
            <rect x="0" y="0" width="360" height="90" fill="#FFFFFF" fillOpacity="0.9" stroke="#0F172A" strokeWidth="2" />
            <line x1="0" y1="30" x2="360" y2="30" stroke="#0F172A" strokeWidth="1" />
            <line x1="0" y1="60" x2="360" y2="60" stroke="#0F172A" strokeWidth="1" />
            <line x1="180" y1="30" x2="180" y2="90" stroke="#0F172A" strokeWidth="1" />

            <text x="10" y="20" fill="#0F172A" fontSize="11" fontFamily="monospace" fontWeight="bold">
              AUTOCAD DWG • PROJETO ARQUITETÔNICO &amp; REGULARIZAÇÃO
            </text>
            <text x="10" y="48" fill="#475569" fontSize="9" fontFamily="monospace">
              DISCIPLINA: ARQUITETURA / ESTRUTURAL
            </text>
            <text x="190" y="48" fill="#0369A1" fontSize="9" fontFamily="monospace" fontWeight="bold">
              REGISTRO: CREA-SP ATIVO
            </text>
            <text x="10" y="78" fill="#475569" fontSize="9" fontFamily="monospace">
              ESCALA: 1:50 • PRANCHA 01/01
            </text>
            <text x="190" y="78" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="bold">
              TSI ASSESSORIA &amp; ENGENHARIA
            </text>
          </g>

        </g>
      </svg>
    </div>
  );
};
