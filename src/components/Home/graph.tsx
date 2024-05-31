const Graph = () => {
  return (
    <div className="px-10 my-5">
      <div>
        <p className="font-semibold text-lg my-10">Copy this code into the jupyter notebook by the right</p>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="bg-[#EEEFEE] px-3 py-3">
            <pre>
              <code>
                import numpy as np
                <br />
                import matplotlib.pyplot as plt
                <br />
                # Define frequency range
                <br />
                freq = np.logspace(0, 6, 1000) # Frequencies from 1 Hz to 1 MHz
                <br />
                # Define constants
                <br />
                k = 1.38e-23 # Boltzmann constant in J/K
                <br />
                T = 300 # Temperature in Kelvin
                <br />
                # Calculate Noise Spectral Density
                <br />
                noise_density = 4 * k * T * freq
                <br />
                # Plot the Noise Spectral Density Curve
                <br />
                plt.figure(figsize=(10, 6))
                <br />
                plt.loglog(freq, noise_density, label='Noise Spectral Density')
                <br />
                plt.title('Noise Spectral Density Curve')
                <br />
                plt.xlabel('Frequency (Hz)')
                <br />
                plt.ylabel('Noise Spectral Density (W/Hz)')
                <br />
                plt.grid(True)
                <br />
                plt.legend()
                <br />
                plt.show()
                <br />
              </code>
            </pre>
          </div>

          <div className="md:w-[60%]">
            <iframe src="https://jupyter.org/try-jupyter/notebooks/?path=notebooks/Intro.ipynb" className="w-full h-[500px] md:h-full"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
