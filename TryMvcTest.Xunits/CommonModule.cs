using Xunit;
using System.Reflection;

internal static class CommonModule
{
    static public object PrivateMethodInvoke(object testClass, string methodName, object[] parameters)
    {
        if (string.IsNullOrWhiteSpace(methodName))
            Assert.True(false, "No Name");

        MethodInfo method = testClass.GetType().GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);

        if (method == null)
            Assert.True(false, string.Format("{0} is not found", methodName));

        try
        {
            return method.Invoke(testClass, parameters);
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException;
        }
    }
}